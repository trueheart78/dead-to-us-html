# Dead to Us

Because when you leave, you're... _dead to us_. :heart:

![dead-to-us][dead-to-us-gif]

---

## Elevator Pitch

A fun, html-only site focused on keeping track of those who have left us too soon.

## Details

An HTML site that utilizes [Mustache.js][mustache-repo] to handle templating. Utilizes the
[unpkg.com][mustache-cdn] CDN.

## Icons

To add a fresh new icon, visit [Emojipedia][emojipedia], and look for something relevant. Currently,
the preferred style for graves are the Google style. It will require updating of the style sheet.

### Association Logic

- If someone has left the company, they should be assigned a `grave-coffin`.
- If they have simply gone to another team, then they should be assigned a `grave-ghost`.
- If they are promoted within the company, then they are considered a `grave-vampire_boy` or `grave-vampire_girl`.
- For those on retainer (like myself), `grave-zombie_boy` or `grave-zombie_girl` is preferred.
- `grave-skull` was the classic icon, and is still available, for times where the prior logic
  doesn't apply.
- Custom one-off's are allowed. `grave-robot` was added just for such an occasion. :robot:

### Supported Icons

Supported:

* `grave-ghost`
  * ![ghost][ghost]
* `grave-coffin`
  * ![coffin][coffin]
* `grave-zombie_boy`
  * ![zombie_boy][zombie_boy]
* `grave-zombie_girl`
  * ![zombie_girl][zombie_girl]
* `grave-vampire_boy`
  * ![vampire_boy][vampire_boy]
* `grave-vampire_girl`
  * ![vampire_girl][vampire_girl]
* `grave-robot`
  * ![robot][robot]
* `grave-skull`
  * ![skull][skull]

#### Mustache.js Usage

For the `icon:`, you should leave off the `grave-` portion.

[dead-to-us-gif]: /site/assets/images/dead-to-us.gif
[emojipedia]: https://emojipedia.org
[skull]: /site/assets/images/skull.png
[coffin]: /site/assets/images/coffin.png
[zombie_boy]: /site/assets/images/zombie-boy.png
[zombie_girl]: /site/assets/images/zombie-girl.png
[ghost]: /site/assets/images/ghost.png
[robot]: /site/assets/images/robot.png
[vampire_boy]: /site/assets/images/vampire-boy.png
[vampire_girl]: /site/assets/images/vampire-girl.png
[mustache-repo]: https://github.com/janl/mustache.js
[mustache-cdn]: https://unpkg.com/mustache@4.2.0/mustache.min.js
