# Intermediate JavaScript - Object-Oriented JavaScript

### Total Commits: 17

### Resubmission Requirements:

- Incomplete Project Prompt:
  - `Allow the user to choose toppings and size for the pizza they'd like to order.` Errors are thrown in the dev tools console when a size is selected.
  - `Create a pizza object constructor with properties for toppings and size.` Your `Pizza` constructor does not expect any parameters to be passed in which are required to be the users selection. The `new Pizza` object cannot be created as an empty object and then manipulated, all user selections must be passed in on object creation like `new Pizza(toppings, size, name)`. Prototype methods should only access the data already in the constructor and cannot receive new data from the user.
  - `Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.` There are no prototype methods in your `Pizza` constructor for finding the price of a single pizza.
- Incomplete testing, all business logic requires tests and tests should be written and committed before your JS code.
- JavaScript Errors:

```
stella-stuckey\js\constants.js
  1:7   error  'PIZZA_ASPECTS' is assigned a value but never used  no-unused-vars
  52:7   error  'PIZZA_PRICES' is assigned a value but never used   no-unused-vars

stella-stuckey\js\parlor.js
  22:21  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  31:21  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  47:14  error  'PIZZA_PRICES' is not defined                                              no-undef
  49:54  error  'PIZZA_PRICES' is not defined                                              no-undef
  51:28  error  'PIZZA_PRICES' is not defined                                              no-undef

stella-stuckey\js\pizza.js
   29:13  error  Expected a 'break' statement before 'case'     no-fallthrough
   31:13  error  Expected a 'break' statement before 'case'     no-fallthrough
   33:13  error  Expected a 'break' statement before 'default'  no-fallthrough
   39:10  error  'declarePreset' is defined but never used      no-unused-vars

stella-stuckey\js\scripts.js
   15:10  error  'unselect' is defined but never used  no-unused-vars
   34:56  error  'receipt' is not defined              no-undef
   37:33  error  'declarePreset' is not defined        no-undef
   38:13  error  'loadPizza' is not defined            no-undef
   41:39  error  'Receipt' is not defined              no-undef
   46:30  error  'receipt' is not defined              no-undef
   53:29  error  'declarePreset' is not defined        no-undef
   55:13  error  'receipt' is not defined              no-undef
   63:9   error  'submit' is not defined               no-undef
   74:9   error  'submit' is not defined               no-undef
   85:9   error  'submit' is not defined               no-undef
   96:9   error  'submit' is not defined               no-undef
  106:9   error  'submit' is not defined               no-undef
  107:9   error  'listPizzas' is not defined           no-undef
  118:23  error  'receipt' is not defined              no-undef
  127:50  error  'PIZZA_ASPECTS' is not defined        no-undef
  157:29  error  'receipt' is not defined              no-undef
  158:9   error  'loadPizza' is not defined            no-undef
  167:19  error  'remove' is not defined               no-undef
  167:30  error  'receipt' is not defined              no-undef
  170:13  error  'pizzaParlor' is constant             no-const-assign
  177:9   error  'receipt' is not defined              no-undef
  178:9   error  'receipt' is not defined              no-undef
  179:58  error  'receipt' is not defined              no-undef
  184:13  error  'receipt' is not defined              no-undef
  185:23  error  'remove' is not defined               no-undef
  185:34  error  'receipt' is not defined              no-undef
  188:17  error  'pizzaParlor' is constant             no-const-assign

stella-stuckey\js	ests.js
    9:35  error  'Pizza' is not defined                     no-undef
   22:35  error  'Pizza' is not defined                     no-undef
   34:35  error  'Pizza' is not defined                     no-undef
   46:35  error  'Pizza' is not defined                     no-undef
   58:35  error  'Pizza' is not defined                     no-undef
   72:35  error  'Pizza' is not defined                     no-undef
   84:35  error  'Pizza' is not defined                     no-undef
  112:35  error  'Pizza' is not defined                     no-undef
  113:24  error  'calculateCost' is not defined             no-undef
  121:35  error  'Pizza' is not defined                     no-undef
  126:24  error  'calculateCost' is not defined             no-undef
  134:35  error  'Pizza' is not defined                     no-undef
  139:24  error  'calculateCost' is not defined             no-undef
  147:35  error  'Pizza' is not defined                     no-undef
  152:24  error  'calculateCost' is not defined             no-undef
  160:35  error  'Pizza' is not defined                     no-undef
  169:24  error  'calculateCost' is not defined             no-undef
  182:10  error  'listFunctions' is defined but never used  no-unused-vars
  183:5   error  Unexpected console statement               no-console
  185:9   error  Unexpected console statement               no-console
  189:10  error  'runTests' is defined but never used       no-unused-vars
  202:13  error  Unexpected console statement               no-console
  218:9   error  Unexpected console statement               no-console
  224:5   error  Unexpected console statement               no-console
  227:9   error  Unexpected console statement               no-console
  228:9   error  Unexpected console statement               no-console
  229:9   error  Unexpected console statement               no-console
  240:40  error  Unnecessary escape character: "           no-useless-escape
  240:42  error  Unnecessary escape character: "           no-useless-escape

stella-stuckey\js\ui.js
   1:10  error  'loadPizza' is defined but never used   no-unused-vars
   2:10  error  'pizzaParlor' is not defined            no-undef
  25:10  error  'submit' is defined but never used      no-unused-vars
  34:9   error  'changeActiveSection' is not defined    no-undef
  36:9   error  'unselect' is not defined               no-undef
  41:10  error  'listPizzas' is defined but never used  no-unused-vars
  59:54  error  'receipt' is not defined                no-undef
  62:10  error  'remove' is defined but never used      no-unused-vars
  68:9   error  'changeActiveSection' is not defined    no-undef

stella-stuckey\proto\pizza.js
    1:7   error  'PIZZA_ASPECTS' is assigned a value but never used                         no-unused-vars
   62:17  error  'currentId' is not defined                                                 no-undef
   66:21  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   73:10  error  'calculateCost' is defined but never used                                  no-unused-vars
   79:13  error  'qtu' is not defined                                                       no-undef
   85:10  error  'Customer' is defined but never used                                       no-unused-vars
  117:13  error  Expected a 'break' statement before 'case'                                 no-fallthrough
  119:13  error  Expected a 'break' statement before 'case'                                 no-fallthrough
  121:13  error  Expected a 'break' statement before 'default'                              no-fallthrough
  145:10  error  'declarePreset' is defined but never used                                  no-unused-vars

stella-stuckey\proto\scripts.js
   5:9   error  'receipt' is assigned a value but never used  no-unused-vars
  15:25  error  'declarePreset' is not defined                no-undef
  19:17  error  Unexpected console statement                  no-console
  26:38  error  'type' is not defined                         no-undef
  28:13  error  Unexpected console statement                  no-console
  32:40  error  'e' is defined but never used                 no-unused-vars

✖ 94 problems (94 errors, 0 warnings)
```

- Friday projects require 8 hours of work with consistent commits, there is a gap of more than 2 hours after your first commit followed by two more gaps of more than an hour & a half each. As a result an additional 2 hours of work with consistent commits is required.

## Teacher Notes:

### Time between each commit:

Previous Commit --> Commit
Tue, Jun 20, 2023 12:13:24 AM --> Tue, Jun 20, 2023 10:29:08 PM diff= 22 hours 15 minutes 44 seconds
Tue, Jun 20, 2023 12:12:46 AM --> Tue, Jun 20, 2023 12:13:24 AM diff= 0 hours 0 minutes 38 seconds
Tue, Jun 20, 2023 12:03:04 AM --> Tue, Jun 20, 2023 12:12:46 AM diff= 0 hours 9 minutes 42 seconds
Mon, Jun 19, 2023 3:33:06 PM --> No more commits rest of day
Sun, Jun 18, 2023 11:25:48 AM --> No more commits rest of day
Fri, Jun 16, 2023 8:01:31 PM --> No more commits rest of day
Fri, Jun 16, 2023 4:47:55 PM --> Fri, Jun 16, 2023 8:01:31 PM diff= 3 hours 13 minutes 36 seconds
Fri, Jun 16, 2023 4:30:31 PM --> Fri, Jun 16, 2023 4:47:55 PM diff= 0 hours 17 minutes 24 seconds
Fri, Jun 16, 2023 4:22:16 PM --> Fri, Jun 16, 2023 4:30:31 PM diff= 0 hours 8 minutes 15 seconds
Fri, Jun 16, 2023 3:59:52 PM --> Fri, Jun 16, 2023 4:22:16 PM diff= 0 hours 22 minutes 24 seconds
Fri, Jun 16, 2023 3:15:48 PM --> Fri, Jun 16, 2023 3:59:52 PM diff= 0 hours 44 minutes 4 seconds
Fri, Jun 16, 2023 1:26:19 PM --> Fri, Jun 16, 2023 3:15:48 PM diff= 1 hours 49 minutes 29 seconds
Fri, Jun 16, 2023 11:42:33 AM --> Fri, Jun 16, 2023 1:26:19 PM diff= 1 hours 43 minutes 46 seconds
Fri, Jun 16, 2023 10:50:44 AM --> Fri, Jun 16, 2023 11:42:33 AM diff= 0 hours 51 minutes 49 seconds
Fri, Jun 16, 2023 8:28:43 AM --> Fri, Jun 16, 2023 10:50:44 AM diff= 2 hours 22 minutes 1 seconds
