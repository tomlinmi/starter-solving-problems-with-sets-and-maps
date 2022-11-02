function intersection(a, b) {
const _map = new Map();
const _set = new Set();


for (const element of a){
_map.set(element, element);
}

for(const element of b){
if(_map.has(element)){


    _set.add(element);
}
}
 return ([..._set]);


}

module.exports = intersection;
