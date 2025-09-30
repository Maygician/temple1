console.log("MJDB is on");
/**
 * 
 */
function Mjdb(o) {
    if (o instanceof Mjdb) { return (this._ = { $: this }).$ };
    if (!(this instanceof Mjdb)) { return new Mjdb(o) }
    console.log("instance created");
    return Mjdb.create(this._ = { $: this, opt: o });
}
; (Mjdb.create = function (o) {
    console.log("inside create");
    return this._ = { $: this, opt: o };
})();
; (Mjdb.get_columnar_snapshot = function (index, columns) {
    //creates snapshot of a reactive table -> column format, arrays of values (per column)
    var obj = {}//per key - add corresponding array
    return obj
})();
var named_snapshots;
// ;(function(){})()
// var MJDB = new Mjdb();
var relative = {};//context_addrress.relative.[proper_mj_descriptor, like t33_...]
var temples_basics = {//cached from temple
    classifiers: {

    },

}

var my_channels;
var neuron_instances;
var named_activation_contexts;
function activate(n_instance, c, a_c) {//

}

function mjdb_get() { }
function mjdb_set() { }
function mjdb_put() { }
function mjdb_on(cb, opt) { }
function mjdb_once(cb, opt) { }
// document.addEventListener("");
var callbacks_mapped;

/**
 * Query examples.
 * Jessica's first child's mom's name.
 * https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/queries/examples
 * 
 * TODO: NFT Truth-keeper. 
 * Keep file/entry's owner's (state manager's?) mjaddress/item location (for work with copies/snapshots)
 * Interface: 
 * Item: issuer:[root_mjaddress,]
 * 
 * 
 * How it all works: 
 * User(MJ_address - node(as in, graph node), containing relevant user's data. Namely, their state_keeper(s), list of (per service provider)
 * 
 * 
 * learning all the nodes referencing some node should be a possibility -> addressing any node, e.g. as a database entry (known relations) there should be a way for it as well
 * 
 * complex descriptors, like utility of A knowing,that B is_a subclass of C with a confidence between D and E to an agent F equals R ...
 * (whole statement should have an address as a knowledge entry, so it can be referenced as well, in case we need another relation to it. like utility (to)(of_having it set as ...)/confidence, e.t.c)
 * Comlex chains of activations could be described to.
 * 
 * Classification: like describing whole activation tree, with arguments/activation context on each step 
 * 
 */