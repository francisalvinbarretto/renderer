var publicAssetPath = 'app/public/';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					paths: [ publicAssetPath + 'snippet/stylesheets' ]
				},
				files: {
					"app/public/promozombie.css": publicAssetPath + "snippet/stylesheets/promozombie.less"
				}
			}
			
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					publicAssetPath + 'snippet/main.js',
					publicAssetPath + 'snippet/defaults.js',
					publicAssetPath + 'snippet/util.js',
					publicAssetPath + 'snippet/encoder.js',
					publicAssetPath + 'snippet/ajax-request.js',

					publicAssetPath + 'snippet/components/main.js',
					publicAssetPath + 'snippet/components/bar.js',
					publicAssetPath + 'snippet/components/text-component.js',
					publicAssetPath + 'snippet/components/embedded-component.js',

					publicAssetPath + 'snippet/renderer.js',
					publicAssetPath + 'snippet/embedder.js',
					//this file should always be the last to concat, because this will trigger the main app
					publicAssetPath + 'snippet/init.js' 
				],
				dest: publicAssetPath + 'promozombie.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'app/public/promozombie.min.js': [ '<%= concat.dist.dest %>']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('build', ['concat', 'less']);
	grunt.registerTask('build-prod', ['concat', 'uglify']);
};