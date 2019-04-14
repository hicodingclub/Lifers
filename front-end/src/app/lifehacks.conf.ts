import { Routes } from '@angular/router';

import { LifehacksComponent } from './lifehacks/lifehacks.component';

//Import routing paths
import {hackRoutingPath, liferhackRoutingPath, liferRoutingPath,  } from './lifehacks/lifehacks-routing.path';

export const LifehacksRoutes: Routes = [
  { path: 'lifehacks', 
    component: LifehacksComponent,
    children: [ 
      {path: '',  redirectTo: 'hack', pathMatch: 'full'},

      { path: "hack",
        children: hackRoutingPath, 
        data: {"mraLevel": 1, "item": "hack"}
      },
      { path: "liferhack",
        children: liferhackRoutingPath, 
        data: {"mraLevel": 1, "item": "liferhack"}
      },
      { path: "lifer",
        children: liferRoutingPath, 
        data: {"mraLevel": 1, "item": "lifer"}
      },
    ]
  }
];

export const lifehacks_server_root_uri:string = "/api/lifehacks";