module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			options: {
				sourceMap: true
			},
			build: {
				files: {
					'build/master.js': [
						'js/main.js',
						'js/controllers/homeCtrl.js',
						'js/controllers/registrationCtrl.js'
						// 'js/services/contactService.js'
					]
				}
			}
		},
		less: {
			development: {
				options: {
					yuicompress: true,
					paths: ["css"],
					livereload: true,
					sourceMap: true,
					sourceMapFilename: 'css/master.css.map',
					sourceMapUrl: 'css/master.css.map',
					sourceMapRootPath: '/'
				},
				files: {
					'css/master.css': 'css/master.less'
				}
			}
		},
		watch: {
			less: {
				options: {
					livereload: true
				},
				files: ['css/**/*.less'],
				tasks: ['less:development']
			},
			js: {
				options: {
					livereload: true
				},
				files: ['js/**/*.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}