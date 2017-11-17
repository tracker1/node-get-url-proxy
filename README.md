# node-get-url-proxy

`get-url-proxy` will return the applicable proxy to use for a given URL based on `NO_PROXY` and `{PROTOCOL}_PROXY` environment variables.

```js
console.log(process.env.HTTP_PROXY) // "http://proxy:8080/"
console.log(process.env.NO_PROXY); // ".foo.com,192.168.1."

// requires protocol & domain
var getProxy = require('get-url-proxy');
getProxy('http://foo.com/'); // null
noProxy('https://www.google.com/'); // "http://proxy:8080/"

// protocol only, without NO_PROXY check
var protocolProxy = require('get-url-proxy/protocol');
protocolProxy('https'): // "http://proxy:8080/"
```

## Search Order

The following search order will be used, generally speaking...

* `NO_PROXY` exclusion will return *`null`*
* `PROTOCOL_PROXY`
* `protocol_proxy`
* `ALL_PROXY`
* `all_proxy`
* *`null`* will be returned with no match.

## Web protocols

For web based protocols, additional/similar protocols will be searched as a fallback.

* `HTTP` -> [`HTTP`. `HTTPS`]
* `HTTPS` -> [`HTTPS`, `HTTP`]
* `WS` -> [`WS`, `WSS`, `HTTPS`, `HTTP`]
* `WSS` -> [`WSS`, `WS`, `HTTPS`, `HTTP`]
* `SFTP` -> [`SFTP`, `SSH`]

All other protocols will only search for their own protocol specifically, falling back to `ALL_PROXY`

------

### NOTE: You may want to use memoization around this module.

#### WARNING

If you are using a node version prior to Node 8, you should install [`url-parse`](https://www.npmjs.com/package/url-parse) as a dependency.
