import { ScrollArea } from '@/components/common/scroll-area'
import { FloatingHeader } from '@/components/common/floating-header'
import { PageTitle } from '@/components/layout/page-title'
import { PageContainer } from '../layout/page-container'

export function NotFound() {
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="未找到" />
      <PageContainer>
          <PageTitle title="未找到" />
          <p>此链接可能已损坏、删除或移动。不过，这里没什么可看的...</p>
      </PageContainer>
    </ScrollArea>
  )
}
