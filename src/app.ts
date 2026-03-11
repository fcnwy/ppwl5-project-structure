import { Elysia } from "elysia";
import { userRoutes } from "./routes/user.route";
import { staticPlugin } from "@elysiajs/static";
// import staticPlugin dari @elysiajs/static #
// import userRoutes dari user.route.ts #

export const app = new Elysia()
  
  .use( // agar css dapat dipanggil lewat SSR 
    staticPlugin({
      assets: "public",
      prefix: "/public"
    })
  )
  
  .use(userRoutes)
