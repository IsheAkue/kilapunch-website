export const dynamic = 'force-static';
export default function robots() {

  return {

    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],


    sitemap:
      "https://kilapuncherp.co.zw/sitemap.xml",

  }

}