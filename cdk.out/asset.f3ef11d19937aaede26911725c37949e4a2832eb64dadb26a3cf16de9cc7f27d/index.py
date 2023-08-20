import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handler(event, context):
    """
    lambda handler
    """
    # log
    logger.info("Hello Lambda")
