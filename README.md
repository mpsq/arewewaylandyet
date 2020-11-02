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

```bash
git clone git@github.com:mpsq/arewewaylandyet.git
cd arewewaylandyet/src
# run any web server, I use python for that:
python -m http.server
# the website is not accessible at http://localhost:8000
```
