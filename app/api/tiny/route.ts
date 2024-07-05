import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import connect from "@/lib/db";
import Url from "@/lib/modals/Url";

export const POST = async (request: Request) => {
  try {
    await connect();

    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    let urlDoc = await Url.findOne({ originalUrl: url });

    if (urlDoc) {
      return NextResponse.json({ shortUrl: urlDoc.shortId }, { status: 200 });
    } else {
      const shortId = nanoid(8);
      urlDoc = new Url({ originalUrl: url, shortId });
      await urlDoc.save();
      return NextResponse.json({ shortUrl: shortId }, { status: 201 });
    }
  } catch (error) {
    console.error("Error processing URL:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
