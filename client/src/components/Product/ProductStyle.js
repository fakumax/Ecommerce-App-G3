
export const styleProduct = ({breakpoints, spacing}) => ({
  root: {
    margin: '1rem auto 1rem auto',
    width: '80%',
    height: 'auto',
    border: '1px solid black',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto auto auto auto auto',
    overflowY: 'scroll',
    [breakpoints.up('md')]:{
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto auto auto',
      gridGap: spacing(3),
    }
  },
  cardRoot:{
    width: '80%',
    height: '14rem',
    alignSelf: 'center',
    justifySelf: 'center',
    gridRow: '1/2',
    gridColumn: '1/2',
    backgroundColor: 'transparent',
    margin: spacing(3),
  },
  media:{
    width: '70%',
    height: '10rem',
    margin: 'auto',
    backgroundSize: 'contain',
  },
  content:{
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #6b8dc8',
  },
  price:{
    fontSize: '1.5rem',
    textDecoration: 'underline',
    color: '#6b8dc8',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#6b8dc8',
    gridRow: '2/3',
    gridColumn: '1/2',
    [breakpoints.up('md')]:{
      gridColumn: '2/3',
      gridRow: '1/2',
      alignSelf: 'center',
      justifySelf: 'left',
      fontSize: '3rem',
    }
  },
  description: {
    gridColumn: '1/2',
    gridRow: '4/5',
    width: '100%',
    height: 'auto',
    marginTop: spacing(2),
    marginBottom: spacing(2),
    [breakpoints.up('md')]:{
      gridColumn: '2/3',
      gridRow: '2/3',
    }
  },
  reviews: {
    width: '100%',
    height: '10rem',
    gridColumn: '1/2',
    gridRow: '5/6',
    overflowY: 'scroll',
    [breakpoints.up('md')]:{
      gridColumn: '1/3',
      gridRow: '3/4',
    }
  }
})