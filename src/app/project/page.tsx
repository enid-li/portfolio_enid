export default function ProjectPage() {
    return (
        <>
            {/* <img src="/assets/nicelyformed.png" alt="" className="w-full" /> */}
            <div className="container mx-auto px-8 md:px-12 py-12">
            <div className="py-8">
                <img src="/assets/dora_editor.png" className="w-full h-full object-cover"alt="" />
            </div>
                <h2 className="text-4xl font-medium py-4">Dora</h2>
                <div className="flex flex-col">
                    <span className="text-sm text-white">Dora is a no-code web builder, especially compatible with 3d assets.
                    Dora是一个无代码的网页开发工具，特别兼容3d元素的键鼠交互。</span>
                    <span className="text-sm text-white">已上线：www.dora.run</span>              
                </div>
            </div>
            {/* Section 1 */}
            <div className="flex flex-col container mx-auto px-8 md:px-12 py-12">
                <h1 className="text-8xl font-extrabold">Main Editor</h1>
                <span className="text-sm text-white">主编辑器</span>
                <span className="text-sm text-white">For this Web builder, I designed two main functions for this web builder - side loader settings & “scroll to” animation panel.
                对于这个Web构建器，我为这个Web构建器设计了两个主要功能-”加载动画“设置和“滚动到”动画面板。</span>
            </div>
            {/* Section 2 */}
            <div className="flex flex-col container mx-auto px-8 md:px-12 py-12">
                <h2 className="text-4xl font-medium py-4">“Scroll to” funtion</h2>
                <span className="text-sm text-white">点击跳转定位功能</span>
                <span className="text-sm text-white">To enhance navigation efficiency for the web builder users, I designed a seamless and intuitive way to jump to specific content sections via clickable elements
                为了提高用户建站时的导航效率，我设计了一种无缝和直观的方式，通过可点击的元素跳转到特定的内容部分。</span>
            </div>
        </>
    )
}