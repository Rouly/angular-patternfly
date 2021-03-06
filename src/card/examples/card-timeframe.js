/**
 * @ngdoc directive
 * @name patternfly.card.directive:pfCard - Timeframe Filters
 * @restrict E
 *
 * @param {string} headTitle Title for the card
 * @param {string=} subTitle Sub-Title for the card
 * @param {string=} spinnerText Text for the card spinner
 * @param {boolean=} showTopBorder Show/Hide the blue top border. True shows top border, false (default) hides top border
 * @param {boolean=} showTitlesSeparator Show/Hide the grey line between the title and sub-title.
 * True (default) shows the line, false hides the line
 * @param {boolean=} showSpinner Show/Hide the spinner for loading state. True shows the spinner, false (default) hides the spinner
 * @param {object=} footer footer configuration properties:<br/>
 * <ul style='list-style-type: none'>
 * <li>.iconClass  - (optional) the icon to show on the bottom left of the footer panel
 * <li>.text       - (optional) the text to show on the bottom left of the footer panel, to the right of the icon
 * <li>.href       - (optional) the href link to navigate to when the footer href is clicked
 * <li>.callBackFn - (optional) user defined function to call when the footer href is clicked
 * </ul>
 * *Note: If a href link and a callBackFn are specified, the href link will be called
 * @param {object=} filter filter configuration properties:<br/>
 * <ul style='list-style-type: none'>
 * <li>.filters    - drop down items for the filter.
 *<pre class=''>
 *  Ex:  'filters' : [{label:'Last 30 Days', value:'30'},
 *                    {label:'Last 15 Days', value:'15'},
 *                    {label:'Today', value:'today'}]</pre>
 * <li>.defaultFilter - integer, 0 based index into the filters array
 * <li>.callBackFn - user defined function to call when a filter is selected
 * <li>.position - (optional) If not specified, or set to 'footer'; the position of the filter dropdown will appear in the
 * card footer.  If set to 'header', the filter dropdown will appear in the card header.
 * </ul>
 * @description
 * Component for easily displaying a card with html content
 *
 * @example
 <example module="demo">

 <file name="index.html">
   <div ng-controller="ChartCtrl">
     <label class="label-title">Timeframe filter in header</label>
       <pf-card head-title="Card Title" sub-title="Card Subtitle" show-top-border="true" filter="filterConfigHeader" style="width: 50%">
         Card Contents
       </pf-card>
     <label class="label-title">Footer with Link & Timeframe filter</label>
     <pf-card head-title="Card Title" sub-title="Card Subtitle" show-top-border="true"
          footer="footerConfig" filter="filterConfig" style="width: 50%">
        Card Contents
     </pf-card>
     <label class="label-title">Loading State</label>
     <pf-card show-spinner="dataLoading" spinner-text="Loading" head-title="Card Title" sub-title="Card Subtitle" show-top-border="true" filter="filterConfigHeader" style="width: 50%">
       Card Contents
     </pf-card>
   </div>
 </file>
 <file name="script.js">
 angular.module( 'demo', ['patternfly.charts', 'patternfly.card'] ).controller( 'ChartCtrl', function( $scope, $timeout ) {

       $scope.dataLoading = true;

       $timeout(function () {
         $scope.dataLoading = false;
       }, 3000 );

       $scope.footerConfig = {
         'iconClass' : 'fa fa-flag',
         'text'      : 'View All Events',
         'callBackFn': function () {
            alert("Footer Callback Fn Called");
          }
       };

       $scope.filterConfigHeader = {
         'filters' : [{label:'Last 30 Days', value:'30'},
                      {label:'Last 15 Days', value:'15'},
                      {label:'Today', value:'today'}],
         'callBackFn': function (f) {
            alert("Header Filter Callback Fn Called for '" + f.label + "' value = " + f.value);
          },
        'position' : 'header'
       };

       $scope.filterConfig = {
         'filters' : [{label:'Last 30 Days', value:'30'},
                      {label:'Last 15 Days', value:'15'},
                      {label:'Today', value:'today'}],
         'callBackFn': function (f) {
            alert("Filter Callback Fn Called for '" + f.label + "' value = " + f.value);
          },
        'defaultFilter' : '1'
       };
     });
 </file>
 </example>
 */
