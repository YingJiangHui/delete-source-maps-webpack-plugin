import {Compiler} from 'webpack'
import path from 'path'
import fs from 'fs'

class WebpackPluginDeleteSourcemap {
  apply(compiler:Compiler){
    compiler.hooks.done.tap('webpack-plugin-delete-source-map',(stats)=>{
      try{
        const {compilation} = stats
        const outputPath = compilation.outputOptions.path
        const sourcemapFileCount = Object.keys(compilation.assets).filter((filename)=>/[a-zA-Z0-9]\.(js|css)\.map$/.test(filename))
        .map((filename)=>{
          if(!outputPath) return
          const filePath = path.resolve(outputPath,filename)
          fs.unlinkSync(filePath)
        }).length
        console.log(`------ deleted sourcemap files: ${sourcemapFileCount} ------`)
      }catch(e){
        console.log(e)
      }
    })
  }
}
export default WebpackPluginDeleteSourcemap