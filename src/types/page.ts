export interface PageProps<
  S extends Record<string, string | undefined> = {},
  P extends Record<string, string | undefined> = {}
> {
  searchParams: S
  params: P
}
