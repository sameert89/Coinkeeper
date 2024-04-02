import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ToggleThemeService } from '../../../shared/utils/toggle-theme.service';

@Component({
  selector: 'app-expense-classification-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './expense-classification-chart.component.html',
  styleUrl: './expense-classification-chart.component.scss',
  providers: [provideEcharts()],
})
export class ExpenseClassificationChartComponent implements OnChanges {
  theme: string = 'cool';
  @Input() chartData!: any[];
  constructor(private toggleThemeService: ToggleThemeService) {}
  ngOnInit() {
    this.toggleThemeService.mode$.subscribe((mode) => {
      this.theme = mode == 'light' ? 'dark' : 'london';
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData']) {
      this.updateChart();
    }
  }
  totalSpent: number = 22500;

  chartOption!: EChartsOption;

  updateChart() {
    this.chartOption = {
      renderer: 'svg',
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: `₹\n\n  ${this.totalSpent}\n \n  This Month`,
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 16,
        },
      },
      series: [
        {
          name: 'Spent On',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 5,
            // borderColor: 'gray'
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: this.chartData,
        },
      ],
    };
  }
}
