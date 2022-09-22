# LinassiNX

This is a demo of a little Next.JS flow.  Updates to the master branch on this project will automatically deploy to the remote site via a webhook.

## Workflow

To get started with this project, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Deploying (Statically)

Updates to the master branch will fire a webhook call to the remote server, which will then in turn
pull the changes down, build and export to the html directory which is served by nginx.