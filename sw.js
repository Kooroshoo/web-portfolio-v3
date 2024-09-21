importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({
    modulePathPrefix: "workbox-v4.3.1"
});
workbox.core.setCacheNameDetails({
    prefix: "gatsby-plugin-offline"
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
self.__precacheManifest = [{
    "url": "webpack-runtime-012fac071f30ffa28da7.js"
}, {
    "url": "framework-8f8cadd211f03ea7e319.js"
}, {
    "url": "app-d6ba10787b49a023d95b.js"
}, {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0fe322861403cc0628f1c1f0ce1049a1"
}, {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-9c14ba322c9de757dc41.js"
}, {
    "url": "polyfill-90b00f8def304eac9ca0.js"
}, {
    "url": "manifest.webmanifest",
    "revision": "23c7d43dbc3e3801adf04359eb622c26"
}].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
importScripts(`idb-keyval-3.2.0-iife.min.js`)
const {
    NavigationRoute
} = workbox.routing
let lastNavigationRequest = null
let offlineShellEnabled = true
const MessageAPI = {
    setPathResources: (event, {
        path,
        resources
    }) => {
        event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
    },
    clearPathResources: event => {
        event.waitUntil(idbKeyval.clear())
    },
    enableOfflineShell: () => {
        offlineShellEnabled = true
    },
    disableOfflineShell: () => {
        offlineShellEnabled = false
    },
}
self.addEventListener(`message`, event => {
    const {
        gatsbyApi: api
    } = event.data
    if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({
    event
}) {
    const {
        pathname
    } = new URL(event.request.url)
    const params = pathname.match(/:(.+)/)[1]
    const data = {}
    if (params.includes(`=`)) {
        params.split(`&`).forEach(param => {
            const [key, val] = param.split(`=`)
            data[key] = val
        })
    } else {
        data.api = params
    }
    if (MessageAPI[data.api] !== undefined) {
        MessageAPI[data.api]()
    }
    if (!data.redirect) {
        return new Response()
    }
    return new Response(null, {
        status: 302,
        headers: {
            Location: lastNavigationRequest,
        },
    })
}
const navigationRoute = new NavigationRoute(async ({
    event
}) => {
    if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
        return handleAPIRequest({
            event
        })
    }
    if (!offlineShellEnabled) {
        return await fetch(event.request)
    }
    lastNavigationRequest = event.request.url
    let {
        pathname
    } = new URL(event.request.url)
    pathname = pathname.replace(new RegExp(`^`), ``)
    const resources = await idbKeyval.get(`resources:${pathname}`)
    if (!resources || !(await caches.match(`/app-d6ba10787b49a023d95b.js`))) {
        return await fetch(event.request)
    }
    for (const resource of resources) {
        if (!(await caches.match(resource))) {
            return await fetch(event.request)
        }
    }
    const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
    const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
    return await caches.match(offlineShellWithKey)
})
workbox.routing.registerRoute(navigationRoute)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)