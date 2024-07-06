import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Url from "@/lib/modals/Url";

export async function GET(
  request: Request,
  { params }: { params: { redirect: string } }
) {
  try {
    await connect();
    const { redirect } = params;
    const urlDoc = await Url.findOne({ shortId: redirect });

    if (!urlDoc) {
      // Return custom HTML for not found
      return new NextResponse(
        `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="preload" href="/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2" as="font" crossorigin="" type="font/woff2"/>
                    <link rel="stylesheet" href="/_next/static/css/2f71e0d51b6954c9.css" data-precedence="next"/>
                    <link rel="stylesheet" href="/_next/static/css/9be0501e9e856d4b.css" data-precedence="next"/>
                    <link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/webpack-fe020b401e7090da.js"/>
                    <script src="/_next/static/chunks/fd9d1056-f518bdc60ef95b2d.js" async=""></script>
                    <script src="/_next/static/chunks/23-9dde44a3e4631d4b.js" async=""></script>
                    <script src="/_next/static/chunks/main-app-693d2cd1d3938aa5.js" async=""></script>
                    <script src="/_next/static/chunks/588-e8156bd09b3e532b.js" async=""></script>
                    <script src="/_next/static/chunks/app/layout-dc253a7c089c2b01.js" async=""></script>
                    <title>page not found</title>
                    <meta name="description" content="Portfolio"/>
                    <meta name="next-size-adjust"/>
                    <script src="/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js" noModule=""></script>
                </head>
                <body class="__className_aaf875 overflow-x-hidden overflow-y-scroll animate-gradient bg-[length:400%_400%]">
                    <div data-overlay-container="true">
                        <div style="font-family:system-ui,&quot;Segoe UI&quot;,Roboto,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center">
                            <div>
                                <style>
                                    body {
                                        color: #000;
                                        background: #fff;
                                        margin: 0
                                    }

                                    .next-error-h1 {
                                        border-right: 1px solid rgba(0,0,0,.3)
                                    }

                                    @media (prefers-color-scheme: dark) {
                                        body {
                                            color:#fff;
                                            background: #000
                                        }

                                        .next-error-h1 {
                                            border-right: 1px solid rgba(255,255,255,.3)
                                        }
                                    }
                                </style>
                                <h1 class="next-error-h1" style="display:inline-block;margin:0 20px 0 0;padding:0 23px 0 0;font-size:24px;font-weight:500;vertical-align:top;line-height:49px">404</h1>
                                <div style="display:inline-block">
                                    <h2 style="font-size:14px;font-weight:400;line-height:49px;margin:0">This page could not be found.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="/_next/static/chunks/webpack-fe020b401e7090da.js" async=""></script>
                    <script>
                        (self.__next_f = self.__next_f || []).push([0]);
                        self.__next_f.push([2, null])
                    </script>
                    <script>
                        self.__next_f.push([1, "1:HL[\"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2\",\"font\",{\"crossOrigin\":\"\",\"type\":\"font/woff2\"}]\n2:HL[\"/_next/static/css/2f71e0d51b6954c9.css\",\"style\"]\n3:HL[\"/_next/static/css/9be0501e9e856d4b.css\",\"style\"]\n"])
                    </script>
                    <script>
                        self.__next_f.push([1, "4:I[95751,[],\"\"]\n6:I[39275,[],\"\"]\n7:I[61343,[],\"\"]\n8:I[51164,[\"588\",\"static/chunks/588-e8156bd09b3e532b.js\",\"185\",\"static/chunks/app/layout-dc253a7c089c2b01.js\"],\"Analytics\"]\n9:I[33378,[\"588\",\"static/chunks/588-e8156bd09b3e532b.js\",\"185\",\"static/chunks/app/layout-dc253a7c089c2b01.js\"],\"Providers\"]\na:I[36185,[\"588\",\"static/chunks/588-e8156bd09b3e532b.js\",\"185\",\"static/chunks/app/layout-dc253a7c089c2b01.js\"],\"ProjectProvider\"]\n10:I[76130,[],\"\"]\nb:{\"fontFamily\":\"system-ui,\\\"Segoe UI\\\",Roboto,Helvetica,Arial,sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\"\",\"height\":\"100vh\",\"textAlign\":\"center\",\"display\":\"flex\",\"flexDirection\":\"column\",\"alignItems\":\"center\",\"justifyContent\":\"center\"}\nc:{\"display\":\"inline-block\",\"margin\":\"0 20px 0 0\",\"padding\":\"0 23px 0 0\",\"fontSize\":24,\"fontWeight\":500,\"verticalAlign\":\"top\",\"lineHeight\":\"49px\"}\nd:{\"display\":\"inline-block\"}\ne:{\"fontSize\":14,\"fontWeight\":400,\"lineHeight\":\"49px\",\"margin\":0}\n11:[]\n"])
                    </script>
                    <script>
                        self.__next_f.push([1, "0:[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/2f71e0d51b6954c9.css\",\"precedence\":\"next\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"1\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/9be0501e9e856d4b.css\",\"precedence\":\"next\",\"crossOrigin\":\"$undefined\"}]],[\"$\",\"$L4\",null,{\"buildId\":\"2XcENVMsRm9t3d7xznfRE\",\"assetPrefix\":\"\",\"initialCanonicalUrl\":\"/_not-found\",\"initialTree\":[\"\",{\"children\":[\"/_not-found\",{\"children\":[\"__PAGE__\",{}]}]},\"$undefined\",\"$undefined\",true],\"initialSeedData\":[\"\",{\"children\":[\"/_not-found\",{\"children\":[\"__PAGE__\",{},[[\"$L5\",[[\"$\",\"title\",null,{\"children\":\"404: This page could not be found.\"}],[\"$\",\"div\",null,{\"style\":{\"fontFamily\":\"system-ui,\\\"Segoe UI\\\",Roboto,Helvetica,Arial,sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\"\",\"height\":\"100vh\",\"textAlign\":\"center\",\"display\":\"flex\",\"flexDirection\":\"column\",\"alignItems\":\"center\",\"justifyContent\":\"center\"},\"children\":[\"$\",\"div\",null,{\"children\":[[\"$\",\"style\",null,{\"dangerouslySetInnerHTML\":{\"__html\":\"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\"}}],[\"$\",\"h1\",null,{\"className\":\"next-error-h1\",\"style\":{\"display\":\"inline-block\",\"margin\":\"0 20px 0 0\",\"padding\":\"0 23px 0 0\",\"fontSize\":24,\"fontWeight\":500,\"verticalAlign\":\"top\",\"lineHeight\":\"49px\"},\"children\":\"404\"}],[\"$\",\"div\",null,{\"style\":{\"display\":\"inline-block\"},\"children\":[\"$\",\"h2\",null,{\"style\":{\"fontSize\":14,\"fontWeight\":400,\"lineHeight\":\"49px\",\"margin\":0},\"children\":\"This page could not be found.\"}]}]]}]}]]],null],null]},[\"$\",\"$L6\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"/_not-found\",\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$L7\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":null}],null]},[[\"$\",\"html\",null,{\"lang\":\"en\",\"children\":[\"$\",\"body\",null,{\"className\":\"__className_aaf875 overflow-x-hidden overflow-y-scroll animate-gradient bg-[length:400%_400%]\",\"children\":[[\"$\",\"$L8\",null,{}],[\"$\",\"$L9\",null,{\"children\":[\"$\",\"$La\",null,{\"children\":[\"$\",\"$L6\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$L7\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":[[\"$\",\"title\",null,{\"children\":\"404: This page could not be found.\"}],[\"$\",\"div\",null,{\"style\":\"$b\",\"children\":[\"$\",\"div\",null,{\"children\":[[\"$\",\"style\",null,{\"dangerouslySetInnerHTML\":{\"__html\":\"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\"}}],[\"$\",\"h1\",null,{\"className\":\"next-error-h1\",\"style\":\"$c\",\"children\":\"404\"}],[\"$\",\"div\",null,{\"style\":\"$d\",\"children\":[\"$\",\"h2\",null,{\"style\":\"$e\",\"children\":\"This page could not be found.\"}]}]]}]}]],\"notFoundStyles\":[],\"styles\":null}]}]}]]}]}],null],null],\"couldBeIntercepted\":false,\"initialHead\":[false,\"$Lf\"],\"globalErrorComponent\":\"$10\",\"missingSlots\":\"$W11\"}]]\n"])
                    </script>
                    <script>
                        self.__next_f.push([1, "f:[[\"$\",\"meta\",\"0\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"$\",\"meta\",\"1\",{\"charSet\":\"utf-8\"}],[\"$\",\"title\",\"2\",{\"children\":\"Rohit Somvanshi\"}],[\"$\",\"meta\",\"3\",{\"name\":\"description\",\"content\":\"Portfolio\"}],[\"$\",\"meta\",\"4\",{\"name\":\"next-size-adjust\"}]]\n5:null\n"])
                    </script>
                </body>
            </html>
            `,
        {
          status: 404,
          headers: { "Content-Type": "text/html" },
        }
      );
    }

    return NextResponse.redirect(urlDoc.originalUrl);
  } catch (error) {
    console.error("Error retrieving URL:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
