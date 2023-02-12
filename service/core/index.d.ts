// Type definitions for ./index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace axiosNinja.prototype{
	// axiosNinja.prototype.request.!0
	
	/**
	 * 
	 */
	interface Request0 {
				
		/**
		 * 
		 */
		method : string;
	}
}

/**
 * 
 */
export declare var DEAFULT_LOADING : boolean;

/**
 * 
 */
declare interface axiosNinja {
		
	/**
	 * 
	 * @param config 
	 */
	new (config : any);
		
	/**
	 * 
	 * @param config 
	 * @return  
	 */
	request(config : any): Promise;
		
	/**
	 * 
	 * @param config 
	 * @return  
	 */
	get(config : any): Promise;
		
	/**
	 * 
	 * @param config 
	 * @return  
	 */
	post(config : any): Promise;
		
	/**
	 * 
	 * @param config 
	 * @return  
	 */
	delete(config : any): Promise;
		
	/**
	 * 
	 * @param config 
	 * @return  
	 */
	patch(config : any): Promise;
		
	/**
	 * 将showLoading设置true, 这样不会影响下一个请求
	 */
	showLoading : boolean;
}
