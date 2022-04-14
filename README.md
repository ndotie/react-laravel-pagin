# Introduction React Laravel Pagin

#Note Fixed our femous error of `null of useState` Enjoy
This is a simple tool which enables people who works with react with backend of laravel api and wanted to consume the laravel pagination results.

Its makes easy flexible and friendly, you just focus on looks of your UI and not the mechanics of laravel pagination results on your react app

## Installing

on your root directory
`npm install react-laravel-pagin`

and you're all set to start using your lovely tool

### Using `react-laravel-pagin`

inside the page you need paginator
`import {ReactLaravelPagin} from 'react-laravel-pagin'`

and use your component as

     <ReactLaravelPagin

        baseLink=`laravel-api-end-point`

        headers={{
             ...
         //You're headers
        }}

        setIsLoading={setIsLoading}

        dataPicker={(data) => data.trips}

        setDataList={setTrips}

        customDots={() => <h3 className="d-inline-block">...</h3>}

        customPrev={(props) => <span {...props}>prev</span>}

        customNext={(props) => <span {...props}>next</span>}

        linkStyle={(active, prev, next) =>
          `btn ${active ? "btn-success" : "btn-default"} mx-1`
        }

      />

### Props definition

`baseLink` is a link to laravel-api which gives paginated results example `http://localhost:8000/api/users` just the link itself and no more parameters to it

`headers` is object of http headers since sometimes you need authorization to be able to access some end points
if there is more header just comma separate them on the headers object :)

`setIsLoading` in here just pass in a function which receives either true/false it could be from hooks from which you can trigger loading... state so users gets feedback

as `const [isLoading, setIsLoading] = useState(false)` so instead of triggering `setIsLoading(true)` manually

you just pass `setIsLoading` to the ReactLaravelPagin and it'll handle the rest for you as below

    `<ReactLaravelPagin
    ...
    setIsLoading = {setIsLoading}

    > `

`dataPicker` receives a callback function which will receive a response from the server this response will be inside object called `data`

so on laravel api we have custom of giving response as below

` return response()->json(([ 'status' => 200, 'users' => $users ]));`

so on dataPicker function `(data) => data.users` actually states that the data you really want to work with is inside users property

`setDataList` This is a function which receives the data in this case could be users to displayed on the page, not pagination links, really data of users, it could be customers or mybe products etc, for react best practice you can pass i a hook as below

`const [users, setUsers] = useState([])`

observe how the `setUsers` function is injected into the component and so when we have those users we can actually access them on `users` variable :)

`customDots` actually passes in a component which will replace the default ... dots on long pagination

`customPrev` passes a component which will replace default prev component

###Note:
Make sure you pass in the props on the `customPrev` and `customNext` since they hold other functionalities

`linkStyle` Receives function which you can use to customize the css looks of the component to blend in for your site
this function receives three parameters, active => if the link is active boolean, prev => true if this link is prev link, next => true if the link is next link,
inside this function returns the style which will be applied the respective pagination link

###Note:

You're adviced to create you're component ready on `customPrev` and `customNext` in the case of styling and not depend on `linkStyle`

    <ReactLaravelPagin

        baseLink="http://localhost:8000/api/users"

        headers={{Authorization : "Bearer " + 'you're token'}}

        setIsLoading={setIsLoading}

        dataPicker={(data) => data.users}

        setDataList={setUsers}

        customDots={() => <h3 className="d-inline-block">...</h3>}

        customPrev={(props) => <span {...props}>prev</span>}

        customNext={(props) => <span {...props}>next</span>}

        linkStyle={(active, prev, next) => `btn ${active ? "btn-success" : "btn-default"} mx-1` }

    />`
