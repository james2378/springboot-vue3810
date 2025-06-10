const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot2r52r/",
            name: "springboot2r52r",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2r52r/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "旅游管理系统"
        } 
    }
}
export default base
