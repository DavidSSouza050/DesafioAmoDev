import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//page
import Cars from './pages/Cars';

function Routes(){  
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Cars} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;