module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify'); //minifies js docs into one file
	grunt.loadNpmTasks('grunt-contrib-watch'); //minifies js docs into one file
		grunt.loadNpmTasks('grunt-contrib-compass'); //minifies js docs into one file
	grunt.initConfig({
		uglify:{
			my_target: {
				files:{
					'_/js/script.js' : ['_/components/js/*.js']//compresses to the js file
				}//files
			}//my_target
		},//uglify
		compass: {
		   dev:{
		     options: {
		     	config:'config.rb'
		     }//options
		   }//dev
		},//compass
		
		watch:{
			options: { livereload: true },
			scripts: {
				files:['_/components/js/*.js'],
				tasks: ['uglify']
			 },//scripts
			 sass:{
			   files:['_/components/sass/*.scss'],
			   tasks: ['compass:dev']
			 },//sass
			 html: {
			 files: ['*.html']
			 }
		}//watch
	}) //initConfig
	grunt.registerTask('default', 'watch');

}//exports
