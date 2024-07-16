# docker examples

## volta1

### docker compose
``` bash
docker compose up -d

docker compose attach volta1_svc
pnpm -v

Ctrl-P Ctrl-Q

docker compose down

# all clean
docker compose down --rmi all --volumes
```

### next.js app
``` bash
cd /vol/apps
pnpx create-next-app@latest my-app

cd my-app
pnpm run dev

# deploy
pnpm run build
cp -r out/* /vol/nginx/html/
```

``` bash
cd /vol/apps/app1

pnpm install

pnpm run dev

pnpm run build
cp -r out/* /vol/nginx/html/
```
