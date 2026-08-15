import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_APP_URL: "https://careerpivot.me",
    NEXT_PUBLIC_SUPABASE_URL: "https://iuxrydeejefvpcbqiwfn.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "sb_publishable_PqgDGVLmVffH6amHGTVnEg_9Gr7RvkW",
  },
};

export default nextConfig;
