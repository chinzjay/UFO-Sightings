# UFO-Sightings
## Overview of Project
The purpose of this analysis is to make Dana's webpage more dynamic by providing multiple filters to provide an in-depth analysis of UFO sightings using Javascript. 

## Results
Dana’s current dynamic table can filter the UFO sightings based on the Date of Sighting. Using JavaScript and HTML, the code was modified to create additional table filters : city, state, country, and shape. After the user inputs the search criteria and presses **"Enter"**, the webpage will be updated accordingly. *Fig 1* depicts the webpage filtered with a single criterion. The table has been filtered to provide the UFO sightings with the filter for the shape *'circle'*. 

![1_filter](https://github.com/chinzjay/UFOs/blob/main/1_filter.PNG)
|:--:|
|Fig 1. Webpage filtered with one criterion|
 
*Fig 2.* depicts the table that has been filtered with the criteria state *'ar'* and country *'us'*.
![multiple_filter](https://github.com/chinzjay/UFOs/blob/main/multiple_filter.PNG)
|:--:|
|Fig 2. Webpage filtered with multiple criteria|


## Summary
One of the major drawbacks of the design is that the filtering is case sensitive. If the filter condition is not in the same case as the table data, there will be zero results. 
In the next phase of development, the following designs can be added.
- The code can be modified to include results even if the case does not match.
- The filter design can be changed to return results even when partial critera is met when the table is filtered with multiple criteria.
