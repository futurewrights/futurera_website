# Future Wrights Deployment — One Pager

## Platform Setup

Hosting: Vercel  
Git Repository: GitHub  
DNS: Cloudflare  
Large Media Storage: Vercel Blob

## Branch & Deployment Flow

text develop    ↓ Vercel Preview Deployment    ↓ Test changes before release  main    ↓ Vercel Production Deployment    ↓ futurewrights.ai 

### Pre-Production

Use develop for all active development.

bash git checkout develop git pull origin develop  git add . git commit -m "Describe changes" git push origin develop 

A push to develop automatically creates a Vercel Preview deployment.

Check it under:

Vercel → Project → Deployments

Confirm:

text Branch: develop Environment: Preview 

Test the preview before releasing.

## Production

Once the develop version is approved:

text develop    ↓ Pull Request / Merge    ↓ main 

Merge through GitHub or locally:

bash git checkout main git pull origin main git merge develop git push origin main 

A push or merge to main automatically creates a Production deployment.

Production URL:  
https://futurewrights.ai

No manual Vercel redeployment is normally required.

## Release Workflow

text Code locally     ↓ Push to develop     ↓ Vercel Preview     ↓ Test     ↓ Merge develop → main     ↓ Vercel Production     ↓ Verify futurewrights.ai 

## Before Merging to Main

Verify:

- Desktop and mobile layout
- Navigation and links
- Images
- Videos
- Forms
- External links
- Environment variables
- No console/runtime errors

## Media Files

Do not commit large videos to GitHub.

Store videos and other large assets in Vercel Blob and reference their permanent public URLs from the website.

text GitHub → source code Vercel → website deployment Vercel Blob → large videos/media Cloudflare → DNS 

## Important Rules

- Develop on develop, not directly on main.
- develop = Preview / pre-production.
- main = Production.
- Test Preview before merging.
- Never commit API keys, passwords, or secrets.
- Keep production environment variables in Vercel.
- Do not change Cloudflare DNS during normal deployments.
- Do not commit large MP4 files to Git.