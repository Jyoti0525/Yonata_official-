export interface FormData {
  name: string
  email: string
  challenge: string
}

export interface PageProps {
  isActive: boolean
}

export interface PageWithNavigationProps extends PageProps {
  onPageChange: (pageId: string) => void
}
