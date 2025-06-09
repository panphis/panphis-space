
import { ProjectList } from "@/components/projects";
import { ScrollArea } from '@/components/common/scroll-area'
import { FloatingHeader } from '@/components/common/floating-header'
import { PageContainer } from "@/components/layout/page-container";

import { PageTitle } from '@/components/layout/page-title'

export default function Projects() {
    return (
        <ScrollArea useScrollAreaId>
            <FloatingHeader scrollTitle="作品" />
            <PageContainer >
                <PageTitle title="作品" />
                <ProjectList />
            </PageContainer>
        </ScrollArea>
    );
}