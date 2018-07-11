# Vulcan Sentry
Sentry integration for VulcanJS

## Set-up

### Install
```
meteor add origenstudio:vulcan-sentry
```

### Settings

In your app settings.json file add:

``` json
{
    //...
    public: {
        //...
        sentry: {
            DSN: YOUR_SENTRY_DSN_CODE
        }
    }
}

```

### Run your app
Errors should start reporting to sentry. To manually launch an error open the browser console and type:
``` js
Raven.captureException(new Error('Hello, World!'))
```

## What it does?

This package currently only supports detection of Frontend errors.

There is a discussion going on which is the best way to do a better integration [here](https://github.com/VulcanJS/Vulcan/issues/2014) for the Backend and Frontend.




