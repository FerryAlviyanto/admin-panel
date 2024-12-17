import Product from "@/libs/models/Product";
import { connectMonggoDB } from "@/libs/MonggoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMonggoDB();

    const data = await Product.find();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
