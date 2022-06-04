# Educational Learning Platform


## Folder layout and clean code layering
### Application
This is where all the business logic should be contained.

domain entities
app state
computations
analytics tracking
constants
services


### Infrastructure
Uses dependency injection and inversion of control into the application layer.

responsible for api calls
external data transformations
local storage


### Presentation
Presentation should only import from other layers.

## Currency handling in this project.
Currently all currency should be passed around in the following format:

4023  -> $40.23

The project uses the dinero.js package to do conversions and handle money.

#### Example usages
``` var formattedCost = Dinero({ amount: 4995 }).toFormat('$0,0.00') ```

#### Resources on Dinero library
https://www.honeybadger.io/blog/currency-money-calculations-in-javascript/