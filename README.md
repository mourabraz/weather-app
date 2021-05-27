<div align="center">
    <img width=600 alt="Weather App" src=""/>
</div>

<h1>Weather APP</h1>
<h3>by @mourabraz</h3>

<p>
  This app use a free plan from <a href="https://openweathermap.org">https://openweathermap.org</a>
</p>

<hr />

## Requirements

- [git][git] v2.30 or greater
- [NodeJS][node] 12 or greater
- [npm][npm] v6 or greater

> older versions may work, but they have not been test

You can check this requirements running the comands below:

```shell
git --version
node -v
npm -v
```

> you should have `git`, `node`, `npm` in your **`PATH`**

## Download, install and run:

```shel
git clone https://github.com/mourabraz/weather-app.git
```

### Rename the file `.env.local.example` to `.env.local` and update accordingly

<details>
  <summary>For the few next days you can use this API key</summary>
```
REACT_APP_API_KEY=ff4b75ba8b9484ae3728a24c7d581d87
```
</details>
> update the API KEY should be enough

```shel
cd weather-app
npm install
```

```shel
npm start
```

## Use Docker

```
docker-compose up
```

> this can take a while for the first time (3-5 minutes)
> docker compose will serve the aplication on port 3000 in development mode and the compodoc on port 8080 (documentation)

## Use it

Open in your browser with the follow link:
[http://localhost:3000](http://localhost:3000)

## To use the Documentation

```shel
npm run doc
```

Access [http://localhost:8080](http://localhost:8080)

## If you would like to see this app in real life, it is running in production on

[https://weather.mourabraz.com](https://weather.mourabraz.com)

## License

MIT © mourabraz@hotmail.com
