// app/api/cart/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/sanity/lib/db/db"; 
import { cart } from "@/sanity/lib/db/schema"; 
import { eq, and } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server"; 

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity } = await req.json();
    const { userId } = await auth(); 
    if (!userId) return NextResponse.json({ error: "Not logged in" }, { status: 401 });

    const existingArr = await db
      .select()
      .from(cart)
      .where(and(eq(cart.userId, userId), eq(cart.productId, productId)));

    const existing = existingArr[0];

    if (existing) {
      await db.update(cart)
        .set({ quantity: existing.quantity + (quantity || 1) })
        .where(eq(cart.id, existing.id));
    } else {
      await db.insert(cart).values({
        userId,
        productId,
        quantity: quantity || 1,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { userId } = await auth(); 
  if (!userId) return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const items = await db.select().from(cart).where(eq(cart.userId, userId));
  return NextResponse.json(items);
}

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // ✅ Puray user ka cart empty karo
  await db.delete(cart).where(eq(cart.userId, userId));
  
  return NextResponse.json({ success: true, message: "Cart cleared" });
}
