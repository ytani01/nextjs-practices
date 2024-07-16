# nextjs-practices

## docker compose
``` bash
docker compose up -d

docker compose attach nxp-next_svc
pnpm -v

Ctrl-P Ctrl-Q

docker compose down

# all clean
docker compose down --rmi all --volumes
```

## new Next.js app
``docker compose attach nxp-next_svc``
``` bash
cd /vol/apps
pnpx create-next-app@latest my-app

cd my-app
pnpm run dev
```

## Deploy

### next.config.mjs
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

### build and copy files
``docker compose attach nxp-next_svc``
``` bash
docker compose attach nxp-next_svc

pnpm install
pnpm run build
cp -r out/* /vol/nginx/html/
```
