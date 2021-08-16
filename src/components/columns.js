import { format } from 'date-fns'

export const COLUMNS = [

  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'Name',
    className: 'left'
      
  },
  {
    Header: 'Team',
    Footer: 'Team',
    accessor: 'Team'
  },
  {
    Header: 'Week Ending',
    Footer: 'Week Ending',
    accessor: 'Week',
  },
  {
    Header: 'PA',
    Footer: 'PA',
    accessor: 'PA',
    disableFilters: true
  },
  {
    Header: 'BaseRuns9',
    Footer: 'BaseRuns9',
    accessor: 'BaseRuns9',
    disableFilters: true
  },
  {
    Header: 'BRpct',
    Footer: 'BRpct',
    accessor: 'BRpct',
    disableFilters: true,
  },
  {
    Header: 'HH9',
    Footer: 'HH9',
    accessor: 'HH9',
    disableFilters: true,
    
  },
  {
    Header: 'HH9pct',
    Footer: 'HH9pct',
    accessor: 'HH9pct',
    disableFilters: true
  },
  {
    Header: 'xBB%',
    Footer: 'xBB%',
    accessor: 'xBB%',
    disableFilters: true,
    
  },
  {
    Header: 'xK%',
    Footer: 'xK%',
    accessor: 'xk%',
    disableFilters: true
  },
  {
    Header: 'xBB/K',
    Footer: 'xBB/K',
    accessor: 'xBB/K',
    disableFilters: true,
},
 {
    Header: 'xBB/Kpct',
    Footer: 'xBB/Kpct',
    accessor:'xBB/Kpct',
    disableFilters: true,
    
  },
  {
    Header: 'BW PCT',
    Footer: 'BW PCT',
    accessor: '3M BAT',
    disableFilters: true
},
 {
    Header: 'Rank',
    Footer: 'Rank',
    accessor: 'Rank',
    disableFilters: true
  },
]

