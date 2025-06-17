// db/schema.ts
import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  productId: varchar("product_id", { length: 255 }).notNull(),
  quantity: integer("quantity").default(1),
});
