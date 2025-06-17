import { sendBook } from "@/lib/email";

export async function POST(request: Request) {
  let event;
  try {
    event = await request.json();
  } catch (error) {
    return new Response("Invalid JSON", { status: 400 });
  }

  // Check for successful charge event
  if (event.event === "charge.success") {
    const email = event.data.customer.email;

    try {
      await sendBook(email);
      return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
    } catch (error) {
      console.error("Error sending book:", error);
      return new Response(JSON.stringify({ error: "Failed to send book" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else {
    return new Response(JSON.stringify({ status: "fail" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  
}