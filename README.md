# [Are we Wayland yet?](https://arewewaylandyet.com)

I think so... This is an opinionated answer, if you disagree or if you think
something is missing, I would love to hear about it, please open an issue or a
pull request.

# Discussion

I posted this website on the
[Arch Linux subreddit](https://www.reddit.com/r/archlinux/). The post has many
interesting comments and valuable links, it is worth
[having a look](https://www.reddit.com/r/archlinux/comments/jm8743/are_we_wayland_yet/).

# How to build

## Prerequisites

- [Hugo](https://github.com/gohugoio/hugo) 0.78+
- [NodeJS](https://nodejs.org) 12 with `npm` or `yarn`

## Steps

1. Get the code

```bash
git clone git@github.com:mpsq/arewewaylandyet.git
cd arewewaylandyet
```

2. Install dependencies

```bash
npm install # yarn will work too
```

3. Run the development server

```bash
hugo server -D
```

The server should be accessible at http://localhost:1313.
