# nextjs-practices

## docker compose
``` bash
docker compose up -d

docker compose attach volta1_svc
pnpm -v

Ctrl-P Ctrl-Q

docker compose down

# all clean
docker compose down --rmi all --volumes
```

## new Next.js app
``` bash
cd /vol/apps
pnpx create-next-app@latest my-app

cd my-app
pnpm run dev
```

## Deploy

next.config.mjs
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

``` bash
pnpm install
pnpm run build
cp -r out/* /vol/nginx/html/
```
