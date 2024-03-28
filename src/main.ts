import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import * as echarts from 'echarts';
import 'echarts/theme/azul.js';
import 'echarts/theme/bee-inspired.js';
import 'echarts/theme/blue.js';
import 'echarts/theme/caravan.js';
import 'echarts/theme/carp.js';
import 'echarts/theme/cool.js';
import 'echarts/theme/dark-blue.js';
import 'echarts/theme/dark-bold.js';
import 'echarts/theme/dark-digerati.js';
import 'echarts/theme/dark-fresh-cut.js';
import 'echarts/theme/dark-mushroom.js';
import 'echarts/theme/dark.js';
import 'echarts/theme/eduardo.js';
import 'echarts/theme/forest.js';
import 'echarts/theme/fresh-cut.js';
import 'echarts/theme/fruit.js';
import 'echarts/theme/gray.js';
import 'echarts/theme/green.js';
import 'echarts/theme/helianthus.js';
import 'echarts/theme/infographic.js';
import 'echarts/theme/inspired.js';
import 'echarts/theme/jazz.js';
import 'echarts/theme/london.js';
import 'echarts/theme/macarons.js';
import 'echarts/theme/macarons2.js';
import 'echarts/theme/mint.js';
import 'echarts/theme/red-velvet.js';
import 'echarts/theme/red.js';
import 'echarts/theme/roma.js';
import 'echarts/theme/royal.js';
import 'echarts/theme/sakura.js';
import 'echarts/theme/shine.js';
import 'echarts/theme/tech-blue.js';
import 'echarts/theme/vintage.js';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
