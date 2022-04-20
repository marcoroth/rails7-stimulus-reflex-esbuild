# Steps to Re-Create


```bash
rails -v
Rails 7.0.2.3
```

```bash
rails new rails7-stimulus-reflex-esbuild -j esbuild
```

```bash
cd rails7-stimulus-reflex-esbuild/
```

```bash
yarn add @rails/actioncable@7.0.2-3 stimulus_reflex@3.5.0-pre9 cable_ready@5.0.0-pre9 esbuild-rails
```

```bash
bundle add stimulus_reflex -v 3.5.0.pre9
```

```bash
bundle add cable_ready -v 5.0.0.pre9
```

```bash
rails g channel example
```

```bash
rails dev:cache
```

```bash
rails stimulus_reflex:install
```

```bash
touch esbuild.config.js
```

```js
// esbuild.config.js

const path = require('path')
const rails = require('esbuild-rails')

require("esbuild").build({
  entryPoints: ["application.js"],
  bundle: true,
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  watch: process.argv.includes("--watch"),
  plugins: [rails()],
}).catch(() => process.exit(1))
```


```js
// app/javascript/controllers/index.js

import { application } from "./application"

import controllers from "./**/*_controller.js"

controllers.forEach((controller) => {
  application.register(controller.name, controller.module.default)
})
```

```bash
mkdir app/javascript/config/
```

```bash
touch app/javascript/config/stimulus_reflex.js
```
Add

```js
// app/javascript/config/stimulus_reflex.js
import { application } from "../controllers/application"

import StimulusReflex from 'stimulus_reflex'
import CableReady from 'cable_ready'

import consumer from '../channels/consumer'
import controller from '../controllers/application_controller'

application.consumer = consumer

StimulusReflex.initialize(application, { controller, isolate: true })
CableReady.initialize({ consumer })
```

```js
// app/javascript/application.js

import "@hotwired/turbo-rails"
import "./channels"
import "./controllers"
import "./config/stimulus_reflex"
```

```bash
❯ rails g controller home index
```

```bash
npm set-script build "node esbuild.config.js"
```

```bash
bin/dev
```

```bash
open http://localhost:3000
```
