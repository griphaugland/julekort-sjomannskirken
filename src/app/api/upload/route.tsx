import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
  /*   const body = (await request.json()) as HandleUploadBody; */

  try {
    /*    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        console.log("pathname", pathname);

        return {
          allowedContentTypes: ["video/mp4"],
          tokenPayload: JSON.stringify({}),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log("blob upload completed", blob, tokenPayload);

        try {
        } catch (error) {
          console.log(error);
          throw new Error("Could not update user");
        }
      },
    }); */
    const jsonResponse = { message: "Upload is currently disabled" };

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
