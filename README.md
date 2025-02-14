<p align="center">
  <a href="https://www.learnwithjason.dev">
    <img src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_240/v1579281727/lwj/learn-with-jason.png" alt="Learn With Jason" width="120" />
  </a>
</p>
<h1 align="center">
   <a href="https://www.learnwithjason.dev">learnwithjason.dev</a>
</h1>
<h3 align="center">
  Boop Crew HQ for <em>Learn With Jason</em>
</h3>
<p align="center">
  Fun things to do: 
  <a href="https://twitch.tv/jlengstorf"><strong>follow on Twitch</strong></a> · 
  <a href="https://lwj.dev/schedule"><strong>see upcoming episodes</strong></a> · 
  <a href="https://www.learnwithjason.dev/calendar"><strong>add the Google Calendar</strong></a> 
</p>

&nbsp;

This site is home to _Learn With Jason_’s episode back catalog, upcoming schedule, and written posts. It’s built with [Toast](https://toast.dev) and [Netlify Functions](https://www.netlify.com/products/functions/?utm_campaign=devex-jl&utm_source=github&utm_medium=readme&utm_content=functions-jl). For data, it uses a combination of [Sanity](https://www.sanity.io/) and [Hasura](https://hasura.io/).

## Local Development

To run this repo, you will need:

- Node >= v14.15.1 (if you’re using `nvm`, run `nvm use` in the project root to switch)
- the [Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_campaign=devex-jl&utm_source=github&utm_medium=readme&utm_content=cli-jl)

To start, clone the repo and install dependencies:

```bash
# clone the repo
git clone git@github.com:learnwithjason/learnwithjason.dev

# move into the project directory
cd learnwithjason.dev/

# install dependencies
npm install
```

Next, start the project using the Netlify CLI:

```bash
ntl dev
```

The project will start at `http://localhost:8888`. Please note that the environment variables will not be set, so some of the serverless functions won’t work unless you add your own env vars. This shouldn’t prevent working on the project for UI-related changes.
