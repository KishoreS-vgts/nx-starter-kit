export interface Route {
  path: string
  element: React.ComponentType
  roles: string[]
  layout?: React.ComponentType<{ children: React.ReactNode }>
  children?: Route[]
  // this flag we can use to protect the most critical pages.
  //Like a second layer on top of the initial filtering layer
  protected?: boolean
}
