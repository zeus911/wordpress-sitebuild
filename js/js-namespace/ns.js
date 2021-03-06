// top-level namespace being assigned an object literal
var myApp = myApp || {};

// a convenience function for parsing string namespaces and
// automatically generating nested namespaces
function extend( ns, ns_string ) {
    var parts = ns_string.split('.'),
        parent = ns,
        pl, i;

    if (parts[0] == "myApp") {
        parts = parts.slice(1);
    }

    pl = parts.length;
    for (i = 0; i < pl; i++) {
        //create a property if it doesnt exist
        if (typeof parent[parts[i]] == 'undefined') {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }

    return parent;
}

// sample usage:
// extend myApp with a deeply nested namespace
var mod = extend(myApp, 'myApp.modules.module2');
// the correct object with nested depths is output
console.dir(mod);
// minor test to check the instance of mod can also
// be used outside of the myApp namesapce as a clone
// that includes the extensions
console.dir(mod == myApp.modules.module2); //true
// further demonstration of easier nested namespace
// assignment using extend
extend(myApp, 'moduleA.moduleB.moduleC.moduleD');
extend(myApp, 'longer.version.looks.like.this');
console.dir(myApp);
