import {
  ITaxCalculationStrategy,
  LineItem,
  LineItemTaxLine,
  ShippingMethodTaxLine,
  TaxCalculationContext,
} from "@medusajs/medusa";
import Stripe from "stripe";

class TaxCalculationStrategy implements ITaxCalculationStrategy {
  private stripe: Stripe;

  constructor(container, options) {
    // options contains plugin configurations
    this.stripe = new Stripe(options.api_key, {
      apiVersion: "2022-11-15",
    });
  }

  async calculate(
    items: LineItem[],
    taxLines: (ShippingMethodTaxLine | LineItemTaxLine)[],
    calculationContext: TaxCalculationContext
  ): Promise<number> {
    const orderId = items[0].order_id;
    if (orderId) {
      // TODO: Use OrderService to retrieve tax amount from order metadata to prevent unnecessary calls to the Stripe Tax API
      /*
    const order = TODO;
    const taxAmount = order?.metadata?.tax?.amount
    // If tax amount isn't stored in the order metadata yet, return 0
    return taxAmount || 0
    */
    }
    const cartId = items[0].cart_id;
    // TODO: Use CartService to retrieve tax amount from cart metadata to prevent unnecessary calls to the Stripe Tax API
    /*
    const cart = TODO;
    const taxAmount = cart?.metadata?.tax?.amount
    // If tax amount isn't stored in the cart metadata yet, return 0
    return taxAmount || 0
    */
  }
}

export default TaxCalculationStrategy;
