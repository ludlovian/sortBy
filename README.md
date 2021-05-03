# sortBy
Creates sorting functions

## API

Single default export

### sortBy
```
import sortBy from 'sortby'

arr.sort(sortBy(selector, desc?))
```

Creates a sorting function based on the selected value.
The supplied `selector` can be an attribute name, or a selector function.

If you want to reverse the sort order, set `desc` to a truthy value.

### thenBy

Every `sortBy` (or `thenBy`) function has a `thenBy` to create multiple levels of sorting

```
arr.sort(sortBy('region').thenBy((item => item.sales.volume), true))
```
